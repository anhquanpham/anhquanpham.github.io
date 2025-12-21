import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Misc = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/misc.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  });

  return (
    <Main title="Misc" description="Miscellaneous information about Anh-Quan Pham">
      <article className="post markdown" id="misc">
        <header>
          <div className="title">
            <h2>
              <Link to="/misc">Misc</Link>
            </h2>
            <p>The fun stuff</p>
          </div>
        </header>
        <Markdown
          options={{
            overrides: {
              iframe: {
                props: {
                  allowFullScreen: true,
                },
              },
              video: {
                component: 'video',
                props: {
                  controls: true,
                  style: { width: '100%', height: '100%' },
                },
              },
            },
          }}
        >
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Misc;
