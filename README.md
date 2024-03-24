# DBML JS parser #

 1) clone this repo: `git clone https://github.com/pahaz/peggy-parser-example`
 2) install deps: `yarn`
 3) create `testdbml.js`:
    ```javasctipt
    const { parse } = require('./src/pegparsers/dbml')
    
    const text = `
      Table users {
        id integer
        username varchar
        role varchar
        created_at timestamp
      }
      
      Table posts {
        id integer [primary key]
        title varchar
        body text [note: 'Content of the post']
        user_id integer
        status post_status
        created_at timestamp
      }
      
      Enum post_status {
        draft
        published
        private [note: 'visible via URL only']
      }
      
      Ref: posts.user_id > users.id // many-to-one
    `
    
    console.log(parse(text))
    ```
  4) run `node testdbml.js`

You can also run curent test for the parser by `yarn test` command
