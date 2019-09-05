import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import debounce from 'lodash/debounce';
import SearchBar from './search_bar.jsx';
import VideoDetail from './video_detail.jsx';
import VideoList from './video_list.jsx';

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
        const videoSearch = debounce((term) => {this.videoSearch(term)}, 300)

        return (
            <>
                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    videos = {this.state.videos}
                    onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})}/>
            </>
        );
    }
}

export default VideoApp;

