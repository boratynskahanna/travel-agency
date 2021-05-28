import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDurationFrom, changeDurationTo, changeAddTag, changeRemoveTag } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDurationFrom: duration => dispatch(changeDurationFrom(duration)),
  changeDurationTo: duration => dispatch(changeDurationTo(duration)),
  changeAddTag: tags => dispatch(changeAddTag(tags)),
  changeRemoveTag: tags => dispatch(changeRemoveTag(tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
