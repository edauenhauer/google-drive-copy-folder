export default class API {
  static copyFileBody(
    parentId: string,
    title: string,
    mimeType: string = null,
    description: string = null
  ) {
    let body = {
      title: title,
      description: description,
      parents: [
        {
          kind: 'drive#parentReference',
          id: parentId
        }
      ]
    };
    if (mimeType) {
      body = Object.assign(body, { mimeType });
    }
    return body;
  }

  static permissionBodyValue(role: string, type: string, value: string) {
    return {
      role,
      type,
      value
    };
  }

  static permissionBodyId(
    role: string,
    type: string,
    id: string,
    withLink: boolean
  ) {
    return {
      role,
      type,
      id,
      withLink
    };
  }
}
