import {useState} from 'react';
import take from 'lodash/take';

import {getEditorPicks, getPostsLatest} from 'services/api.services';
import {ACTION_EVENTS} from '../Types';

const useHandlerActions = ({actionName}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleAction = () => {
    switch (actionName) {
      case ACTION_EVENTS.GET_EDITOR_PICKS:
        setLoading(true);
        getEditorPicks()
          .then(([e, res]) => {
            if (!e) {
              setData(res.editorPicks || []);
            }
            setLoading(false);
          })
          .catch(_ => {
            setLoading(false);
          });
        break;
      case ACTION_EVENTS.GET_LATEST:
        setLoading(true);
        getPostsLatest()
          .then(([e, res]) => {
            const takeThreeLatest = take(res.latest, 20) || [];
            if (!e) {
              setData(takeThreeLatest);
            }
            setLoading(false);
          })
          .catch(_ => {
            setLoading(false);
          });
        break;

      default:
        break;
    }
  };

  return {loading, data, handleAction};
};

export {useHandlerActions};
