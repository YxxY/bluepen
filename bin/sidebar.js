const fs = require("fs");
const path = require("path");
const nunjucks = require('nunjucks')
nunjucks.configure({ autoescape: false });
const logger = console
const capitalize = str => {
    let first, rest;
    try {
        [first, ...rest] = str
    } catch (error) {
        return ''
    }
    return first.toUpperCase() + rest.join('')
}

const rootDirName = 'docs'

const docsRoot = path.join(__dirname, "..", rootDirName);
const sidebarPath = path.join(
    __dirname,
    "..",
    ".vuepress",
    "config",
    "sidebar.js"
);

const template = `
{% for item in items %}
  const {{ item.name }} = {{ item.router | dump(2) }}
{% endfor %}

module.exports = {
{% for item in items %}
    "{{ item.path }}": {{ item.name }},
{% endfor %}
}
`

main();

function main() {
    const items = [];

    const cates = getCates(docsRoot);
    cates.forEach(cate => {
        logger.log(`processing dir "${cate}"...`)
        const router = genSubDirRouter(cate);
        if (!router.length) {
            return;
        }

        items.push({
            path: `/${rootDirName}/${path.basename(cate)}/`,
            name: path.basename(cate).replace(/ /g, "_"),
            router
        });
    });

    fs.writeFileSync(sidebarPath, nunjucks.renderString(template, { items }));
    logger.log(`generate sidebar done!`)
}

/**
 * 读取指定目录的文件夹作为一级目录
 * @param {String} root
 */
function getCates(root) {
    const result = [];
    const dirs = fs.readdirSync(root);
    dirs.forEach(name => {
        const dir = path.resolve(root, name);
        if (fs.statSync(dir).isDirectory()) {
            result.push(dir);
        }
    });
    return result;
}

/**
 * 生成每个子目录的路由映射表
 * @param {String} root
 * @param {String} prefix
 */
function genSubDirRouter(root, prefix) {
    prefix = prefix || "";
    const root_name = path.basename(root)
    let [root_order, root_title] = root_name.split(".");
    root_title = root_title ? root_title : root_order
    let router = [];

    const files = fs.readdirSync(root);
    files.forEach(filename => {
        const file = path.resolve(root, filename);
        const stat = fs.statSync(file);
        const [order_str, title, type] = filename.split(".");

        const order = parseInt(order_str, 10);
        if (isNaN(order) || order < 0) { // 过滤不符合命名规则的文件
            if (order_str.toUpperCase() === 'README') {
                let route = root_name + '/'
                if (root_name === root_title)
                    route = '/docs/' + route
                router.unshift([route, capitalize(root_title) + '前言'])
            }
            return;
        }

        if (stat.isDirectory()) {
            router[order] = {
                title,
                collapsable: false,
                sidebarDepth: 2,
                children: genSubDirRouter(file, prefix + filename + "/")
            };
        } else {
            if (type !== "md") {
                logger.error(`unhandled file "${file}".`);
                return;
            }
            router[order] = [prefix + filename, title];
            // router[order] = {
            //     title,
            //     path: prefix + filename,
            //     sidebarDepth: 2
            // };
        }
    });

    router = router.filter(item => item);
    return router;
}


function captalize() {
    return ([first, ...rest]) => first.toUpperCase() + rest.join('')
}
