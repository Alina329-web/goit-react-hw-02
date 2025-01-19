import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div className={styles.feedback}>
      <p className={styles.feedbacktext}>Good: {feedback.good}</p>
      <p className={styles.feedbacktext}>Neutral: {feedback.neutral}</p>
      <p className={styles.feedbacktext}>Bad: {feedback.bad}</p>
      <p className={styles.feedbacktext}>Total Feedback: {totalFeedback}</p>
      <p className={styles.feedbacktext}>
        Positive Feedback: {positiveFeedbackPercentage}%
      </p>
    </div>
  );
};

export default Feedback;
