import { createRoot } from 'react-dom/client';
import StarShipFeature from '../components/StarShipFeature';

let container = null;
let root = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  // cleanup on exiting
  root.unmount();
  root = null;
  container.remove();
  container = null;
});

const starShipFeature = {
  title: 'Hyperdrive Rating',
  icon: 'faSpaceShuttle',
  feature: '2.0',

};

let title;
let icon;
let feature;

describe('show starship page', () => {
  test('do you have starship data', () => {
    root?.render(<StarShipFeature starShipFeature={starShipFeature} />);

    title = container?.textContent === 'Hyperdrive Rating';
    expect(title).toBeDefined();

    icon = container?.textContent === 'faSpaceShuttle';
    expect(icon).toBeDefined();
    
    feature = container?.textContent === '2.0';
    expect(feature).toBeDefined();
  });
});
