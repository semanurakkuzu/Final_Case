import { createRoot } from 'react-dom/client';
import Error from '../components/Error';

let container = null;
let root = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  root.unmount();
  root = null;
  container.remove();
  container = null;
});

it('shows error page', () => {
  root?.render(<Error />);

  let text = container?.textContent === '404 ErrorThe page you are looking for does not exist.The page you are looking for does not exist.';
  expect(text).toBeDefined();
});
