const CURRENT_DOC_VERSION = 4;

/* eslint no-fallthrough: "off" */
export function Doc(doc = { version: CURRENT_DOC_VERSION, data: {} }) {
  this._loadDocument(doc.version, doc.data);
}

Doc.prototype = {
  _loadDocument(docVersion, data) {
    // TODO: Update document based on version
    this._data = data;
    let nameParts;
    switch (docVersion) {
      case 1:
        nameParts = data.name.split(/\s+/);
        data.firstName = nameParts[0];
        data.lastName = nameParts[nameParts.length - 1];
      case 2:
        data.email = 'nobody@example.com';
      case 3:
        nameParts = data.name.split(/\s+/);
        let middleName = nameParts.length > 2
          ? nameParts.slice(1, nameParts.length - 1).join(' ')
          : '';
        data.middleName = middleName;
      default:
    }
  },
  get data() {
    return { ...this._data };
  }
};

Doc.fromFile = function fromFile(filename) {
  let doc;
  try {
    doc = require(`../docs/${filename}`);
  } catch (error) {
    throw error;
  }
  return new Doc(doc);
};
