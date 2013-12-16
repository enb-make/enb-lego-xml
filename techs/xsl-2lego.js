/**
 * xsl-2lego
 * =========
 *
 * Собирает `?.2lego.xsl` по deps'ам.
 *
 * **Опции**
 *
 * * *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
 *   (его предоставляет технология `files`). По умолчанию — `?.files`.
 * * *String* **target** — Результирующий таргет. По умолчанию — `?.2lego.xsl`.
 * * *String* **prependXsl** — Xsl для вставки в начало документа. По умолчанию пусто.
 * * *String* **appendXsl** — Xsl для вставки в конец документа. По умолчанию пусто.
 *
 * **Пример**
 *
 * ```javascript
 * nodeConfig.addTech(require('enb-lego-xml/techs/2lego.xsl'));
 * ```
 */
module.exports = require('./xsl').buildFlow()
    .name('xsl-2lego')
    .useFileList('2lego.xsl')
    .target('target', '?.2lego.xsl')
    .createTech();
