describe('Placeholder API - cenários básicos', () => {
  it('GET /posts deve retornar lista de publicações', () => {
    cy.request('/posts').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.be.an('array');
      expect(resp.body.length).to.be.greaterThan(0);
    });
  });

  it('GET /posts/1 deve retornar publicação com id 1', () => {
    cy.request('/posts/1').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property('id', 1);
      expect(resp.body).to.have.property('userId');
      expect(resp.body).to.have.property('title');
    });
  });

  it('GET /comments deve retornar lista de comentários', () => {
    cy.request('/comments').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.be.an('array');
      expect(resp.body[0]).to.include.keys('postId','id','name','email','body');
    });
  });

  it('GET /comments/1 deve retornar comentário específico', () => {
    cy.request('/comments/1').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property('id', 1);
    });
  });

  it('GET /albums deve retornar lista de álbuns', () => {
    cy.request('/albums').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.be.an('array');
      expect(resp.body[0]).to.include.keys('userId','id','title');
    });
  });

  it('GET /albums/1 deve retornar álbum específico', () => {
    cy.request('/albums/1').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property('id', 1);
    });
  });

  it('GET /photos deve retornar lista de fotos', () => {
    cy.request('/photos').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.be.an('array');
      expect(resp.body[0]).to.include.keys('albumId','id','title','url','thumbnailUrl');
    });
  });

  it('GET /photos/1 deve retornar foto específica', () => {
    cy.request('/photos/1').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property('id', 1);
    });
  });

  it('GET /todos deve retornar lista de tarefas', () => {
    cy.request('/todos').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.be.an('array');
      expect(resp.body[0]).to.include.keys('userId','id','title','completed');
    });
  });

  it('GET /todos/1 deve retornar tarefa específica', () => {
    cy.request('/todos/1').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property('id', 1);
    });
  });

  it('GET /users deve retornar lista de usuários', () => {
    cy.request('/users').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.be.an('array');
      expect(resp.body[0]).to.include.keys('id','name','username','email');
    });
  });

  it('GET /users/1 deve retornar usuário específico', () => {
    cy.request('/users/1').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property('id', 1);
    });
  });

  it('POST /posts deve criar uma publicação', () => {
    const payload = { title: 'foo', body: 'bar', userId: 1 };
    cy.request('POST', '/posts', payload).then((resp) => {
      expect(resp.status).to.equal(201);
      expect(resp.body).to.include(payload);
      expect(resp.body).to.have.property('id');
    });
  });

  it('DELETE /posts/1 deve deletar a publicação', () => {
    cy.request('DELETE', '/posts/1').then((resp) => {
      // jsonplaceholder returns 200 with empty object
      expect([200, 204]).to.include(resp.status);
    });
  });
});
