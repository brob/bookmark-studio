// deskStructure.js
import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
const blocksToHtml = require('@sanity/block-content-to-html')
import { Code } from '@sanity/UI'
import documentStore from 'part:@sanity/base/datastore/document'
import { map } from 'rxjs/operators'
import QueryContainer from 'part:@sanity/base/query-container'



const serializers = {
  types: {
    code: props => (
      h('pre', { className: props.node.language },
        h('code', props.node.code)
      )
    )
  }
}



const JsonPreview = ({ document }) => {
  
  const Body = () => {
    const bodyHTML = blocksToHtml({
      blocks: document.displayed.opening,
      serializers: serializers
    })
    return (
      <Code size={3} language="html">
        ${bodyHTML}
      </Code>
    )
  }
  const Bookmarks = () => (
    <QueryContainer query={`*[_id == $newsletterId]{bookmarks[]->}[0].bookmarks`} params={{newsletterId: document.displayed._id}}>
      {({result, loading, error, onRetry}) => {
        console.log(result)
        if (loading) return `loading`
        if (error) return `error ${error}`

        return (
          <Code size={3} language="html">
            {`
<h2>A collection of links</h2>
${result?.documents.map(bookmark => `<h3><a href="${bookmark.url}">${bookmark.pageTitle}</a></h3>\n`).join('')}           
            `}
          </Code>
        )
      }}
    </QueryContainer>  
  )

  return (
    <>
    <Code size={3} language="html">
      {`

<link href="https://cdnjs.cloudflare.com/ajax/libs/foundation-emails/2.2.1/foundation-emails.min.css" rel="stylesheet">

<div style="padding: 20px; margin: 20px auto; max-width: 550px;background-color: white;">
`}
  </Code>
    <Body />
    <Bookmarks />
    <Code size={3} language="html">
      {`
<h3 style="font-size: 20px;"><a href="{{ item.url }}">{{ item.pageTitle }}</a></h3>
      
<hr style="margin: 20px 0;" />

<a style="display: block;" href="https://bookmarks.bryanlrobinson.com" title="Brob's bookmarks">See full list of bookmarks</a>


<!-- prevent Gmail on iOS font size manipulation -->
<div style="display:none; white-space:nowrap; font:15px courier; line-height:0;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
</div>
      `}
    

    </Code>
    </>
  )
}

export const getDefaultDocumentNode = () => {
  // Give all documents the JSON preview, 
  // as well as the default form view
  return S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title('Email HTML')
  ])
}

export default S.defaults()