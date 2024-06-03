/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface MyObj {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<MyObj> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const firstPage = new Page({ title: 'TS is awful' });

export { firstPage };
