import http from 'http';

const API_BASE_URL = 'http://localhost:3000';

class IncomeRepository {
  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      http.get(url, res => {
        let chunks = [];
        res.on('data', chunk => {
            chunks.push(chunk);
        })

        res.on('end', () => {
            const data = Buffer.concat(chunks).toString();
            resolve(JSON.parse(data));
        })
      })
    })
  }

  async getConversions() {
    const data = await this.makeRequest(`${API_BASE_URL}/convert`);
    return data.results;
  }
}

export default IncomeRepository;
