import EventEmitter from 'react-native-eventemitter';

const EventKey = {
  EVENT_BOOK_MARK: '@bookmark',
};

export function getBookMarks() {
  EventEmitter.emit(EventKey.EVENT_BOOK_MARK, {});
}

export function listenerBookMarks(callback) {
  EventEmitter.on(EventKey.EVENT_BOOK_MARK, callback);
}
