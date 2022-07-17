import { useState } from 'react';
import Section from './section/section';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import Statistics from './statistics/statistics';
import Notification from './notification/notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        alert('error');
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <div className="btnsWrap">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </div>
      </Section>
      {countTotalFeedback() ? (
        <section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
