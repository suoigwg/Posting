## API

- ##### 无需认证的

  - GET `article/:id`

    - ```json
      {
        "id": 1,
        "title": "标题",
        "content": "内容",
        "timestamp": "0",
        "author": 0
      }
      ```

  - GET `user/:id`

    - ```json
      {
        "id": 1,
        "username": "demoAccount",
        "wordCount": 18,
        "articleCount": 1,
        "following": 0,
        "follower": 0
      }
      ```

  - GET `likes/:id`

    - ```json
      [
          {
              "id": 2,
              "title": "标题2",
              "content": "内容2",
              "timestamp": "0",
              "author": 0
          },
          {
              "id": 3,
              "title": "标题3",
              "content": "内容3",
              "timestamp": "0",
              "author": 0
          }
      ]
      ```

  - GET `publish/:id`

    - ```
      [
          {
              "id": 4,
              "title": "标题3",
              "content": "内容3",
              "timestamp": "0",
              "author": 1
          },
          {
              "id": 5,
              "title": "标题3",
              "content": "内容4阿巴斯的噶啥办法杜甫八十多暗杀第八的申报表卡萨达是低速回复八十",
              "timestamp": "0",
              "author": 1
          }
      ]
      
      ```

      

  - POST `login`

  - GET `article/list`

    - ```
      [
          {
              "id": 1,
              "title": "标题",
              "content": "内容",
              "timestamp": "0",
              "author": 0
          },
          {
              "id": 2,
              "title": "标题2",
              "content": "内容2",
              "timestamp": "0",
              "author": 0
          }
      ]
      ```

      

- ##### 需要认证的

  - POST `article/new`

    - ```
      {
        "author":1,
        "title":"测试创建文章",
        "content":"测试创建文章内容"
      }
      ```

      

  - GET `article/delete/:id`

    - ```
      删除文章的id
      ```

      

  - POST `like`

    - ```
      {
        "user":1,
        "article":100,
        "action":"like"
      }
      ```

      



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
