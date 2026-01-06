describe('Placeholder API - cenários básicos (usando commands)', () => {
  it('GET /posts deve retornar lista de publicações', () => {
    cy.apiGet('/posts').then((resp) => {
      cy.assertListResponse(resp, ['userId','id','title','body']);
    });
  });

  it('GET /posts/1 deve retornar publicação com id 1', () => {
    cy.apiGet('/posts/1').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property('id', 1);
    });
  });

  it('GET /comments deve retornar lista de comentários', () => {
    cy.apiGet('/comments').then((resp) => {
      cy.assertListResponse(resp, ['postId','id','name','email','body']);
    });
  });

  it('GET /comments/1 deve retornar comentário específico', () => {
    cy.apiGet('/comments/1').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property('id', 1);
    });
  });

  it('GET /albums deve retornar lista de álbuns', () => {
    cy.apiGet('/albums').then((resp) => {
      cy.assertListResponse(resp, ['userId','id','title']);
    });
  });

  it('GET /albums/1 deve retornar álbum específico', () => {
    cy.apiGet('/albums/1').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property('id', 1);
    });
  });

  it('GET /photos deve retornar lista de fotos', () => {
    cy.apiGet('/photos').then((resp) => {
      cy.assertListResponse(resp, ['albumId','id','title','url','thumbnailUrl']);
    });
  });

  it('GET /photos/1 deve retornar foto específica', () => {
    cy.apiGet('/photos/1').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property('id', 1);
    });
  });

  it('GET /todos deve retornar lista de tarefas', () => {
    cy.apiGet('/todos').then((resp) => {
      cy.assertListResponse(resp, ['userId','id','title','completed']);
    });
  });

  it('GET /todos/1 deve retornar tarefa específica', () => {
    cy.apiGet('/todos/1').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property('id', 1);
    });
  });

  it('GET /users deve retornar lista de usuários', () => {
    cy.apiGet('/users').then((resp) => {
      cy.assertListResponse(resp, ['id','name','username','email']);
    });
  });

  it('GET /users/1 deve retornar usuário específico', () => {
    cy.apiGet('/users/1').then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property('id', 1);
    });
  });

  it('POST /posts deve criar uma publicação', () => {
    const payload = { title: 'foo', body: 'bar', userId: 1 };
    cy.apiPost('/posts', payload).then((resp) => {
      expect(resp.status).to.be.oneOf([201, 200]);
      expect(resp.body).to.include(payload);
      expect(resp.body).to.have.property('id');
    });
  });

  it('DELETE /posts/1 deve deletar a publicação', () => {
    cy.apiDelete('/posts/1').then((resp) => {
      expect([200, 204]).to.include(resp.status);
    });
  });
});
