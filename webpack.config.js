module.exports = {
  entry: './app/app.js', //diem bat dau
  output:{
    path: __dirname, //thu muc goc
    filename: './public/bundle.js'
  },
  resolve:{
   modules: [__dirname, 'node_modules'],
    alias: {
      action: 'app/action.js', 
      reducer: 'app/reducer/reducer.js', //path cua reducer.js
      store: 'app/storeConf.js',
      List: 'app/comps/List.js',
      Note: 'app/comps/Note.js',
      NoteForm: 'app/comps/NoteForm.js'
    }
  },
  module:{  // them thuoc tinh de dich file jsx sang js thong thuong
    loaders: [
      {
        loader: 'babel-loader', // goi babel-loader
        query: {
          presets: ['react', 'es2015', 'stage-0'] // su dung cac presets cho loader
        },
        test: /\.jsx?$/,  // dich nhung file jsx vao trong bundle
        exclude: /node_module/  // tru file trong thu muc node_module
      }
    ]
  }
};
