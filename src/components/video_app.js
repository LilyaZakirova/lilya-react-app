import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './search_bar';
import VideoDetail from './video_detail';
import VideoList from './video_list';

const API_KEY = 'AIzaSyAf_FaQHTh3VkeIOVKHVMThHHJCEpWQGV4';

class VideoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('Sedona travel');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
              videos: videos,
              selectedVideo: videos[0]
             });
        });
    };


    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    videos = {this.state.videos}
                    onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})}/>
            </div>
        );
    }
}

export default VideoApp;

