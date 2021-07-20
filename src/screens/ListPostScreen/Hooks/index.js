import {useState} from 'react';
import take from 'lodash/take';
import concat from 'lodash/concat';

import {getArticlesByCatogry} from 'services/api.services';
import {ACTION_EVENTS} from '../Types';

const useHandlerActions = ({actionName}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleAction = params => {
    switch (actionName) {
      case ACTION_EVENTS.GET_ARTICLES_BY_CATEGORY: {
        const {category, page, loadmore} = params;
        setLoading(true);
        getArticlesByCatogry(category, page)
          .then(([e, res]) => {
            if (!e) {
              const result = res.articles;
              if (loadmore) {
                setData(concat(data, result));
              } else {
                setData(result || []);
              }
            }
            setNextPage(page + 1);
            setLoading(false);
          })
          .catch(_ => {
            setLoading(false);
          });
        break;
      }
      default:
        break;
    }
  };

  return {loading, data, nextPage, handleAction};
};

export {useHandlerActions};
