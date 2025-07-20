# Blog

This folder contains the blog structure for Zhehui Huang's personal website.

## Structure

```
blog/
├── index.html          # Main blog page listing all posts
├── posts/              # Individual blog post files
│   └── sample-post.html # Template for blog posts
└── README.md           # This file
```

## How to Add a New Blog Post

1. **Create a new HTML file** in the `posts/` folder
   - Use the `sample-post.html` as a template
   - Name your file descriptively (e.g., `my-research-findings.html`)

2. **Update the blog index** (`blog/index.html`)
   - Add a new entry in the "Recent Posts" section
   - Include the title, date, brief description, and link to your post

3. **File structure for a new post:**
   ```html
   <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;margin-bottom:20px;">
     <tbody>
       <tr>
         <td style="padding:10px;width:100%;vertical-align:top">
           <h3><a href="posts/your-post-name.html">Your Blog Post Title</a></h3>
           <p style="color:#666;font-size:14px;">Date</p>
           <p>
             Brief description of your post...
           </p>
           <p>
             <a href="posts/your-post-name.html">Read more →</a>
           </p>
         </td>
       </tr>
     </tbody>
   </table>
   ```

## Styling

The blog uses the same CSS stylesheet as the main website (`../stylesheet.css`), so all styling will be consistent with your main site.

## Features

- Responsive design that matches your main website
- Easy navigation between blog and main site
- Support for code blocks, images, and other content
- Clean, professional appearance

## Tips

- Keep post titles descriptive and SEO-friendly
- Include a brief summary in the blog index
- Use proper heading hierarchy (h1, h2, h3)
- Add images to the `../images/` folder and reference them with relative paths
- Consider adding tags or categories if you plan to have many posts 