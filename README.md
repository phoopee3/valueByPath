# valueByPath

I needed to be able to dynamically get the value of a json object.

Like if I had a json object of:

```json
{
  "expand": "schema,names",
  "startAt": 0,
  "maxResults": 50,
  "total": 2,
  "issues": [
    {
      "id": "11111",
      "self": "https://example.atlassian.net/rest/api/3/issue/11111",
      "key": "PROJECT-11",
      "fields": {
        "summary": "Lorem ipsum dolor sit amet",
        "project": {
          "self": "https://example.atlassian.net/rest/api/3/project/22222",
          "id": "22222",
          "key": "PROJECT",
          "name": "PROJECT",
          "projectTypeKey": "software",
          "simplified": true,
          "avatarUrls": {
            "48x48": "https://example.atlassian.net/secure/projectavatar?pid=22222&avatarId=33333",
            "24x24": "https://example.atlassian.net/secure/projectavatar?size=small&s=small&pid=22222&avatarId=33333",
            "16x16": "https://example.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=22222&avatarId=33333",
            "32x32": "https://example.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=22222&avatarId=33333"
          }
        }
      }
    },
    {
      "id": "44444",
      "self": "https://example.atlassian.net/rest/api/3/issue/44444",
      "key": "PROJECT-177",
      "fields": {
        "summary": "The quick brown fox jumps over the lazy dog",
        "project": {
          "self": "https://example.atlassian.net/rest/api/3/project/55555",
          "id": "55555",
          "key": "PROJECT",
          "name": "PROJECT",
          "projectTypeKey": "software",
          "simplified": true,
          "avatarUrls": {
            "48x48": "https://example.atlassian.net/secure/projectavatar?pid=55555&avatarId=66666",
            "24x24": "https://example.atlassian.net/secure/projectavatar?size=small&s=small&pid=55555&avatarId=66666",
            "16x16": "https://example.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=55555&avatarId=66666",
            "32x32": "https://example.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=55555&avatarId=66666"
          }
        }
      }
    }
  }
}
```

I wanted to loop over the `issues` array and get the values of the keys `key` and `summary` (which is nested under `fields`).

I was doing this programmatically, and wanted to use the dot notation of `element.key` and `element.fields.summary`. But you can't just assign dot notation programmatically, so I wrote this little method to take care of it.

I'm using a recursive function which takes two parameters, the `jsonObject` and the `path`. To keep the path readable in code, I'm just splitting the string on a period, and then passing that array to the method.

So let's say we're looping over the `issues` array, and storing that in an `element` variable:

`console.log( element, ["key"] );`

Would output `PROJECT-11` and `PROJECT-177` for each iteration.

But what I was really after was doing something like:

`console.log( element, "fields.summary".split('.') );`

Which would return `Lorem ipsum dolor sit amet` and `The quick brown fox jumps over the lazy dog` for each iteration.
