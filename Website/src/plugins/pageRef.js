const visit = require('unist-util-visit');

const plugin = () => {
  const transformer = async (root) => {
    let transformed = false;
    visit(root, 'link', (node) => {
      if (node.title === 'pageRef') {
        transformed = true;
        const { url, children } = node;
        for (const attr in node) {
          delete node[attr];
        }
        node.type = 'jsx';
        node.value = `<PageRef href="${url}">${children[0].value}</PageRef>`;
      }
    });
    if (transformed) {
      root.children.unshift({
        type: 'import',
        value: "import PageRef from '@site/src/components/PageRef';",
      });
    }
  };
  return transformer;
};

module.exports = plugin;
