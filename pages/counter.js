import Counter from '../components/counter/counter';
import { fetchCounter } from '../features/counter/actions';

const CounterPage = () => {
  return (
    <div>
      <Counter />
    </div>
  )
}

CounterPage.getInitialProps = async (store) => {
  const action = store.ctx.store
  console.log(action)
  action.dispatch(fetchCounter());
  return {};
};

export default CounterPage;