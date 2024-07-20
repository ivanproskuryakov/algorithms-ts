function findPath(from: string, _to: string, fetchFlighting: Function) {
    // let fetchPromise;
    let routes: string[] = [];
    // let path: string[] = [];
    // fetchFlighting(from).then((flights: any) => console.log(flights));
    const responseExecution = (response: string[]) => {
        response.forEach((r: string) => {
            if (!routes.includes(r)) {
                routes.push(r);
            }
        });

        if (routes.length) {
            fetchPromise = fetchFlighting('d');
        }
    };

    // стартуем промис получения полетов
    // fetchPromise =
    fetchFlighting(from).then(responseExecution);

    console.log(routes);

    return [];
}
