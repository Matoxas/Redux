import React from "react";
import { connect } from "react-redux";
import { getImageUrl } from "../../config";
import { addHeart } from "../actions";
import { removeHeart } from "../actions";

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      opened: false
    };
  }

  toggleSummary = () => {
    const { opened } = this.state;

    this.setState({
      opened: !opened
    });
  };

  isHearted = () => {
    const {
      hearted,
      movie: { id }
    } = this.props;

    return hearted.includes(id);
  };

  render() {
    const {
      onAddHeart,
      onRemoveHeart,
      movie: {
        id,
        backdrop_path,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count
      }
    } = this.props;
    const { opened } = this.state;

    return (
      <div className="card">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${getImageUrl(backdrop_path)})` }}
        />

        <div className="card__title">{original_title}</div>

        <div
          className="card__like"
          onClick={
            this.isHearted() ? () => onRemoveHeart(id) : () => onAddHeart(id)
          }
        >
          <i className={`fa fa-heart${this.isHearted() ? "" : "-o"}`} />
        </div>

        <div className="card__subtitle">
          <span>{release_date}</span>
          <span>
            {vote_average} ({vote_count} votes)
          </span>
        </div>

        <div className="card-info">
          <div className="card-info__header" onClick={this.toggleSummary}>
            Summary
          </div>

          {opened ? (
            <div className="card-info__description">{overview}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

const MapDispatchToProps = dispatch => {
  return {
    onRemoveHeart: id => dispatch(removeHeart(id)),
    onAddHeart: id => dispatch(addHeart(id))
  };
};

const MapStateToProps = state => {
  return {
    hearted: state.hearted
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Card);
