import { duration } from '../utils/timeConverter';
import { videoBaseObject } from './video';

const initialState = {
	db: undefined,
	errorMessages: '',
	entities: {},
	mediaId: '',
	playList: [],
	tags: {},
	queue: [],
	isPlaying: false,
	shuffle: false,
	repeat1: false,
	repeatAll: false,
	showSearch: false,
	filterQuery: '',
	currentTime: 0,
	skipToTime: 0,
	mute: false,
	currentMedia: {},
	currentPlayList: '',
	editPlayList: false,
};

function next(state) {
	const idx = state.playList.indexOf(state.mediaId);
	let mediaId;
	if (state.queue.length) {
		// Play next song from queue.
		const queue = [...state.queue];
		mediaId = queue.shift();
		return Object.assign({}, state, {
			mediaId,
			currentMedia: state.entities[mediaId],
			queue: [...queue],
			isPlaying: true,
		});
	} else if (state.shuffle) {
		// Play a random song.
		mediaId = state.playList[Math.floor(Math.random() * state.playList.length)];
		return Object.assign({}, state, {
			mediaId,
			currentMedia: state.entities[mediaId],
			isPlaying: true,
		});
	} else if (idx === state.playList.length - 1) {
		// If last song on play list, stop playing.
		return Object.assign({}, state, {
			isPlaying: false,
		});
	} else if (idx < state.playList.length - 1) {
		// Play the next song.
		mediaId = state.playList[idx + 1];
		return Object.assign({}, state, {
			mediaId,
			currentMedia: state.entities[mediaId],
			isPlaying: true,
		});
	}
	return state;
}

const mediaPlayer = (state = initialState, action) => {
	let idx;
	let mediaId;
	let entities;
	let queue;
	let tags;
	let mediaIds;
	let tag;
	switch (action.type) {
	case 'ERROR':
		return Object.assign({}, state, {
			errorMessages: [...state.errorMessages, action.message],
		});
	case 'DB_INIT_SUCCESS':
		return Object.assign({}, state, { db: action.db });
	case 'DB_SET_SUCCESS':
		entities = Object.assign({}, state.entities);
		entities[action.data.id].saved = true;
		return Object.assign({}, state, {
			entities,
		});
	case 'DB_GETALL_SUCCESS':
		return Object.assign({}, state, {
			entities: Object.assign({}, state.entities, action.entities),
		});
	case 'DB_GET_PLAYLIST_SUCCESS':
		return Object.assign({}, state, {
			playList: action.playList,
		});
	case 'VIDEO_ERROR':
		entities = Object.assign({}, state.entities);
		entities[action.video.id] = Object.assign({}, action.video, {
			errorMessage: action.message,
			hasError: true,
		});
		return Object.assign({}, next(state), {
			entities,
		});
	case 'ADD_VIDEOS':
		entities = Object.assign({}, state.entities);
		action.videos.forEach((v) => {
			entities[v.id] = Object.assign({}, videoBaseObject, {
				title: v.snippet.title,
				duration: duration(v.contentDetails.duration),
				id: v.id,
			});
		});
		return Object.assign({}, state, {
			playList: [...state.playList, ...action.videos.map(v => v.id).filter(id => !state.playList.includes(id))],
			entities,
		});
	case 'UPGRADE_PLAYLIST':
		const seen = {};
		const filteredPlaylist = [];
		state.playList.forEach((id) => {
			if (!seen[id] && state.entities[id]) {
				seen[id] = true;
				filteredPlaylist.push(id);
			} else {
				console.log('Filterd dupe or missing: ',id);
			}
		});
		entities = {};
		Object.keys(state.entities).forEach((key) => {
			entities[key] = Object.assign({}, videoBaseObject, state.entities[key]);
		});
		return Object.assign({}, state, {
			playList: [...filteredPlaylist],
			entities,
		});
	case 'IMPORT_PLAYLIST':
		return Object.assign({}, state, {
			playList: [...state.playList, ...action.data.playList.filter(id => !state.playList.includes(id))],
			entities: Object.assign({}, state.entities, action.data.entities),
		});
	case 'REMOVE_VIDEO':
		entities = Object.assign({}, state.entities);
		entities[action.video.id].deleted = true;
		return Object.assign({}, state, {
			playList: state.playList.filter(id => id !== action.video.id),
			entities,
		});
	case 'ADD_SEARCH_RESULT':
		entities = Object.assign({}, state.entities);
		entities[action.video.id] = action.video;
		if (state.playList.includes(action.video.id)) return state;
		return Object.assign({}, state, {
			playList: [...state.playList, action.video.id],
			entities,
		});
	case 'PAUSE':
		return Object.assign({}, state, {
			isPlaying: false,
			entities: state.entities,
		});
	case 'PLAY':
		if (action.mediaId) mediaId = action.mediaId;
		else mediaId = !state.mediaId ? state.playList[0] : state.mediaId;
		let currentMedia = {};
		if (action.currentMedia) {
			const newEntity = {};
			newEntity[mediaId] = action.currentMedia;
			entities = Object.assign({}, state.entities, newEntity);
			currentMedia = action.currentMedia;
		} else {
			currentMedia = state.entities[mediaId];
			entities = state.entities;
		}
		return Object.assign({}, state, {
			isPlaying: !!(currentMedia || state.playList.length),
			mediaId,
			currentMedia,
			entities,
		});
	case 'TOGGLE_SHUFFLE':
		return Object.assign({}, state, {
			shuffle: !state.shuffle,
		});
	case 'TOGGLE_MUTE':
		return Object.assign({}, state, {
			mute: !state.mute,
		});
	case 'NEXT_VIDEO':
		return next(state);
	case 'PREV_VIDEO':
		idx = state.playList.indexOf(state.mediaId);
		if (idx > 0) {
			mediaId = state.playList[idx - 1];
			return Object.assign({}, state, {
				mediaId,
				currentMedia: state.entities[mediaId],
				isPlaying: true,
			});
		}
		return state;
	case 'QUEUE_MEDIA':
		return Object.assign({}, state, {
			queue: [...state.queue, action.id],
		});
	case 'QUEUE_PLAY_INDEX':
		queue = [...state.queue];
		mediaId = queue.splice(action.idx, 1)[0];
		return Object.assign({}, state, {
			queue: [...queue],
			mediaId,
			currentMedia: state.entities[mediaId],
			isPlaying: true,
		});
	case 'QUEUE_REMOVE_INDEX':
		queue = [...state.queue];
		queue.splice(action.idx, 1);
		return Object.assign({}, state, {
			queue: [...queue],
		});
	case 'FILTER_PLAYLIST':
		return Object.assign({}, state, {
			filterQuery: action.query,
		});
	case 'SET_CURRENT_TIME':
		return Object.assign({}, state, {
			currentTime: action.time,
		});
	case 'SKIP_TO_TIME':
		return Object.assign({}, state, {
			skipToTime: action.s,
		});
	case 'MOVE_PLAYLIST_MEDIA':
		const playList = state.playList.filter(id => id !== action.mediaId);
		playList.splice(playList.indexOf(action.beforeThisMediaId), 0, action.mediaId);
		return Object.assign({}, state, {
			playList,
		});
	case 'ADD_TAGS':
		mediaIds = action.mediaIds || [];
		tag = action.tag || state.currentPlayList;
		if (!tag) return state;
		if (state.tags[tag]) mediaIds = [...state.tags[tag], ...mediaIds];
		tags = Object.assign({}, state.tags);
		tags[tag] = mediaIds;
		return Object.assign({}, state, {
			tags,
		});
	case 'REMOVE_TAGS':
		mediaIds = action.mediaIds || [];
		tag = action.tag || state.currentPlayList;
		if (!tag) return state;
		if (state.tags[tag]) mediaIds = state.tags[tag].filter(id => !mediaIds.includes(id));
		tags = Object.assign({}, state.tags);
		tags[tag] = mediaIds;
		return Object.assign({}, state, {
			tags,
		});
	case 'SELECT_PLAYLIST':
		return Object.assign({}, state, {
			currentPlayList: action.playListName,
			editPlayList: false,
		});
	case 'DELETE_PALYLIST':
		tags = Object.assign({}, state.tags);
		delete tags[action.playListName];
		return Object.assign({}, state, {
			tags,
		});
	case 'TOGGLE_EDIT_PALYLIST':
		return Object.assign({}, state, {
			editPlayList: action.state !== undefined ? action.state : !state.editPlayList,
			currentPlayList: action.playListName ? action.playListName : state.currentPlayList,
		});
	case 'RECOVER_STATE':
		return Object.assign({}, state, action.state);
	default:
		return state;
	}
};

export default mediaPlayer;
