class BaseService{
    constructor(repo){
        this.repo = repo;
    }

    async getAll(){
        return await this.repo.getAll();
    }
}
export default BaseService;