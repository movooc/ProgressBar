import React from 'react';
import ReactDOM from'react-dom';

var $progressBar = null;

export default React.createClass({
  getInitialState: function(){
    return {progressBar: '',file: {}};
  },
  // 
  componentWillMount: function(){
    // $(this.refs.progress).progressBar({duration : this.state.file.size});
  },

  start: function() {
    //
    console.log('start');
    console.log(this.state.file.size);
    $progressBar = $(this.refs.progress).progressBar({duration : this.state.file.size});
  },

  pause: function() {
    // 进度条100%
    $progressBar.data('progressing').stop();
  },

  end: function() {
      // 进度条100%
      $progressBar.data('progressing').complete(function(){
          
      });
  },

  reset: function() {
    //this.refs.myTextInput.focus();
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
        <button onClick={this.pause}>暂停</button>
        <button onClick={this.end}>结束</button>
        <button onClick={this.reset}>重置</button>
      </div>
    )
  }
})