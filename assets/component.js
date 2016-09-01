import React from 'react';
import ReactDOM from'react-dom';

var $progressBar = null;

export default React.createClass({
  getInitialState: function(){
    return {progressing: 0,file: {}};
  },
  // 
  componentWillMount: function(){
    // $(this.refs.progress).progressBar({duration : this.state.file.size});
  },

  start: function() {
    //
    console.log('start');
    this.setState(Object.assign(this.state,{progressing:0}));
    $progressBar = $(this.refs.progress).off('progressBar')
    .progressBar({duration : this.state.file.size});
  },

  pause: function() {
    // 进度条100%
    $progressBar.data('progressing').stop();
  },

  contining: function() {
    // 进度条继续
    $progressBar.data('progressing').contining();
  },

  end: function() {
      var self = this;
      // 进度条100%
      $progressBar.data('progressing').complete(function(){
        console.log('end');
        self.setState(Object.assign(self.state,{progressing:1}));
      });
  },

  reset: function() {
    // 进度条0
    $progressBar.data('progressing').reset();
    this.setState(Object.assign(this.state,{progressing:0}));
  },

  fileChange: function(event){
    this.setState(Object.assign(this.state,{file:event.target.files[0]}));
    // console.log(this.state)
    this.start();
  },

  render: function(){
    return (
      <div className="">
        {this.props.name}!&nbsp;&nbsp;
        <input type="file" onChange={this.fileChange} multiple={false} / >
        <div className="progressBar" ref="progress">
          <div className="progress_bar"></div>
        </div>
        <p>{this.state.progressing ? '上传完成' : ''}</p>
        <button onClick={this.pause}>暂停</button>&nbsp;
        <button onClick={this.contining}>继续</button>&nbsp;
        <button onClick={this.end}>结束</button>&nbsp;
        <button onClick={this.reset}>重置</button>
      </div>
    )
  }
})