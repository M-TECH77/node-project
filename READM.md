## O MongoDB é composto (basicamente) por:

> mongo: cliente do MongoDB (Mongo Shell)
> mongod: servidor do MongoDB
> mongod --replSet "nomeReplica": servidor de réplica do MongoDB
> mongod --configsvr: serviço de configuração do
> particionamento de dados (ele processa as consultas do cliente
> e determina a localização dos dados)
> mongos: serviço de roteamento de consultas do cliente para o
> serviço de configuração do cluster

<Lista de drivers:
http://docs.mongodb.org/ecosystem/drivers/>
