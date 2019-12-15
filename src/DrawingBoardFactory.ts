export default class DrawingBoardFactory implements DrawingBoardFactory {
    public create(config: createConfig) {
        return config;
    }

    public destroy(id: string) {
        console.log(id);
    }
}
