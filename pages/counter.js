import Counter from '../components/counter/counter';
import { fetchCounter } from '../features/counter/actions';
import getStore from '../features/redux/selectors';

const CounterPage = () => {
  return (
    <div>
      <Counter />
    </div>
  )
}

CounterPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchCounter());
  return {};
};

export default CounterPage;