// import { DiscussionEmbed } from 'disqus-react';
import Script from 'next/script';
interface IProps {
  url?: string;
  slug: string;
  title?: string;
}
export default function Disqus({ url, slug, title }: IProps) {
  return (
    <>
      <div id="disqus_thread"></div>
      <Script id="disqus_script">
        {`
        var disqus_config = function () {
            this.page.url = http://localhost:3000;  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = ${slug}; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            }
             (function() { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
                s.src = 'https://sivaseshasai-com.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
                })();
        `}
      </Script>
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
    </>
  );
  //   const disqusShortname = 'your-disqus-shortname';
  //   const disqusConfig = {
  //     url: url,
  //     identifier: slug,
  //     title: title // Single post title
  //   };
  //   return (
  //     <div>
  //       <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
  //     </div>
  //   );
}
