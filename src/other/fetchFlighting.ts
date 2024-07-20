// Функция поиска вариантов перелета

// Необходимо написать функцию, которая найдет любую цепочку перелетов из пункта вылета в пункт назначения.
// Функция принимает на вход пункт вылета, пункт назначения и функцию поиска билетов.

// Функция должна вернуть промис, который зарезолвится - массивом из всех остановок
// (например, [’A’, ’B’, ’C’]); - или строкой ’no way’, если до пункта назначения добраться нельзя.

// Гарантируется, что составной авиабилет или отсутствует или единственно возможный (нет ромбовидных перелетов).
// Нельзя искать несколько билетов параллельно. Нельзя использовать async/await и генераторы.
// Интерфейс функции поиска билетов:

function fetchFlighting(from: string): Promise<string[] | string> {
  const flights: any = {
    a: ['b', 'd'],
    b: ['c', 'n', 'z'],
    d: ['e', 'f'],
    f: ['s']
  };

  return Promise.resolve(flights[from]);
}

function findPath(from: string, _to: string, fetchFlighting: Function) {
  // let fetchPromise = null;
  let routes: string[] = [];
  // let path: string[] = [];

  // fetchFlighting(from).then((flights: any) => console.log(flights));

  const responseExecution = (response: string[]) => {
    response.forEach((r: string) => {
      if (!routes.includes(r)) {
        routes.push(r);
      }
    })

    if (routes.length) {
      // fetchPromise = fetchFlighting(routes.pop());
    }
  }

  fetchFlighting(from).then(responseExecution);

  console.log(routes);

  return [];
}

findPath('a', 'n', fetchFlighting);

// Promise.resolve(['a', 'b', 'n'])
// findPath('a', 's', fetchFlighting) // Promise.resolve(['a', 'd', 'f', 's'])
// findPath('a', 'q', fetchFlighting) // Promise.reject(new Error('no way'))
// {a: [b, d], b: [c, n, z], d: [e, f], f: [s]}
