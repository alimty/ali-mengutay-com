# Browser Note App

A minimalist, Notion-style note-taking app that runs entirely in your browser. No backend, no cloud sync - just you and your notes.

## ✨ Features

- **WYSIWYG Markdown**: Type markdown shortcuts and see them render instantly
- **Auto-save**: Your notes save automatically to browser localStorage
- **Offline-first**: Works completely offline, no internet needed
- **Zero UI**: No toolbars, buttons, or distractions - pure writing experience
- **Dark theme**: Easy on the eyes with a dark, zen-like interface

## 📝 Markdown Shortcuts

| You type | You get |
|----------|---------|
| `# ` + space | Large heading (H1) |
| `## ` + space | Medium heading (H2) |
| `### ` + space | Small heading (H3) |
| `**text**` | **Bold text** |
| `*text*` | *Italic text* |
| `` `code` `` | Inline code |
| `- ` + space | Bullet list |
| `1. ` + space | Numbered list |
| `> ` + space | Blockquote |
| `---` | Horizontal line |

## 🔧 How It Works

### Technology Stack

1. **Tiptap Editor**: A headless, extensible rich text editor built on ProseMirror
   - Provides true WYSIWYG experience
   - Converts markdown shortcuts to formatted text in real-time
   - No split view needed - everything happens inline

2. **localStorage**: Browser's built-in storage
   - Stores your note content as HTML
   - Persists across browser sessions
   - Storage key: `note-app-content`

3. **Custom Hook** (`useLocalStorage.ts`):
   - Manages state and localStorage sync
   - Debounces saves (500ms delay) to avoid excessive writes
   - Loads content on mount

### Architecture

```
/app/projects/note/
├── page.tsx                    # Main entry point
├── layout.tsx                  # Note app layout (metadata)
├── components/
│   └── MarkdownEditor.tsx      # Tiptap editor wrapper
├── hooks/
│   └── useLocalStorage.ts      # Auto-save + localStorage logic
├── styles.css                  # Custom editor styling
└── README.md                   # This file
```

### Data Flow

1. User types in the editor
2. Tiptap converts markdown shortcuts to HTML
3. `onChange` callback fires
4. `useLocalStorage` hook debounces the save (500ms)
5. Content saved to `localStorage` as HTML
6. On page reload, content loads from `localStorage`

## 🎨 Customization

### Change Auto-save Delay

Edit `page.tsx`:
```tsx
const [content, setContent] = useLocalStorage(
  "note-app-content",
  "",
  1000  // Change from 500ms to 1000ms
);
```

### Change Theme Colors

Edit `styles.css` - modify the `.ProseMirror` class:
```css
.ProseMirror {
  background-color: #your-color !important;
  color: #your-text-color !important;
}
```

### Add More Markdown Features

Edit `MarkdownEditor.tsx` and add Tiptap extensions:
```tsx
import Strike from '@tiptap/extension-strike';

extensions: [
  StarterKit,
  Strike,  // Adds strikethrough support
  // ... more extensions
]
```

## 📦 Standalone Deployment

This app is designed to be easily extracted:

1. Copy the `/app/projects/note/` folder
2. Install dependencies:
   ```bash
   npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-placeholder
   ```
3. Update import paths if needed
4. Deploy as a separate Next.js app

## 💾 Data Storage

- **Storage limit**: ~5-10MB (browser dependent)
- **Storage location**: Browser's localStorage
- **Persistence**: Until you clear browser data
- **Sync**: None - stays on this device only

## 🔒 Privacy

- All data stays in your browser
- No server, no tracking, no analytics
- Clear browser data = clear your notes
- Export your notes manually if needed

## 🚀 Future Ideas

- [ ] Export to markdown/PDF
- [ ] Multiple notes support
- [ ] Search functionality
- [ ] Import from file
- [ ] Keyboard shortcuts reference
- [ ] Word/character count
- [ ] Tags or categories

---

**Storage Key**: `note-app-content`  
**Framework**: Next.js 14 + React + TypeScript  
**Editor**: Tiptap (ProseMirror-based)

