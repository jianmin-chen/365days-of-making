import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Header from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Strike from '@tiptap/extension-strike'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Underline from '@tiptap/extension-underline'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import lowlight from 'lowlight'

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({ lowlight }),
      Header.configure({ levels: [1, 2, 3] }),
      Highlight,
      Image,
      Link.configure({ autolink: true, openOnLink: true }),
      Placeholder.configure({ placeholder: 'Start writing!' }),
      Strike,
      Subscript,
      Superscript,
      Underline
    ]
  })

  const handleSubmission = event => {
    if (editor && !editor.isEmpty) {
      // Send out email
    }
  }

  return (
    <>
      <EditorContent editor={editor} className="editor" />
      <button>Send</button>
    </>
  )
}
