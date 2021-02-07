import { DireflowComponent } from 'direflow-component';
import App from './direflow-component/App';

const direflowComponent = new DireflowComponent();

const direflowProperties = {
  componentTitle: 'Example React App',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
};

const direflowPlugins = [
  {
    name: 'font-loader',
    options: {
      google: {
        families: ['Advent Pro', 'Noto Sans JP'],
      },
    },
  },
];

direflowComponent.configure({
  name: 'example-react-app',
  useShadow: true,
  properties: direflowProperties,
  plugins: direflowPlugins,
});

direflowComponent.create(App);
