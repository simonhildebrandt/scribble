import { visit } from 'unist-util-visit';

// cannibalized shamelessly from https://github.com/johackim/remark-obsidian/blob/master/src/index.js
const BRACKET_LINK_REGEX = /\[\[([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€! ]+)#?([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€! ]+)?\|?([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€! ]+)?\]\]/;

const plugin = (options={}) => (tree) => {
  const { linkBuilder = link => `/${link}` } = options;

  visit(tree, 'paragraph', (node, index, parent) => {
    const newChildren = node.children.map((child, index) => {
      const { type, value } = child;

      if (type == 'text' && value.match(BRACKET_LINK_REGEX)) {

        const fragments = value.split(/(\[\[[^\]]*\]\])/);

        return fragments.map(fragment => {
          let result = fragment.match(BRACKET_LINK_REGEX);
          if (result) {
            const [_bracketLink, link, heading, text]= result;

            return {
              type: 'link',
              url: linkBuilder(link),
              children: [{
                type: "text",
                value: heading || text
              }]
            }
          } else {
            return {
              type: "text",
              value: fragment
            }
          }
        });
      } else {
        return child;
      }
    });

    node.children = newChildren.flat(1);
  });
}

export default plugin;