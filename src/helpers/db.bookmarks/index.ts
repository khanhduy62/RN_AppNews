import AsyncStorage from '@react-native-community/async-storage';
import * as EventsApp from '../events';
const StorageKey = {
  BOOK_MARKS: '@BOOK_NARKS',
};

export async function getListBookMaks() {
  try {
    const data = await AsyncStorage.getItem(StorageKey.BOOK_MARKS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
}

export async function addPost(post: any) {
  try {
    const list = await getListBookMaks();
    if ((await findPost(post._id)) >= 0) {
      return -1;
    }
    list.push(post);
    await AsyncStorage.setItem(StorageKey.BOOK_MARKS, JSON.stringify(list));
    EventsApp.getBookMarks();
    return 1;
  } catch (error) {
    return -1;
  }
}

export async function findPost(idPost: any) {
  const data = await getListBookMaks();
  return data.findIndex(e => e._id === idPost);
}

export async function removePost(idPost: any) {
  const list = await getListBookMaks();
  const index = await findPost(idPost);
  if (index < 0) {
    return -1;
  }
  list.splice(1, index);
  await AsyncStorage.setItem(StorageKey.BOOK_MARKS, JSON.stringify(list));
  EventsApp.getBookMarks();
  return 1;
}
