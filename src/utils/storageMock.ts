export default function () {
    interface storeType {
        [key: string]: string;
    }

    const store: storeType = {
        "0": '{"title": "Hello", "content": "World"}',
        "1": '{"title": "Shut", "content": "Up"}',
        "2": '{"title": "Hello world", "content": "bruh"}',
    };

    Object.defineProperty(window, "localStorage", {
        value: {
            getItem: (key: string) => store[key],
            length: 3,
        },
    });
}
