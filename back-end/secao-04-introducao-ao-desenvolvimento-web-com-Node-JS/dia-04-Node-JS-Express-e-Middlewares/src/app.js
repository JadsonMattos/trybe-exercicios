const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const teamsRouter = require('./routes/teamsRouter');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teams = require('./utils/teams');
const apiCredentials = require('./middlewares/apiCredentials');

const app = express();
const PORT = 3000;

const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: { message: 'Muitas requisições originadas desta IP' },
});
app.use(limiter);

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.static('./images'));
app.use(express.json());
app.use(apiCredentials);
app.use('/teams', teamsRouter);

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

let nextId = 3;

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams', async (req, res, next) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, './teams.json'));
    teams.JSON.parse(data);
    return res.status(200).json({ teams });
  } catch (error) {
    return next(error);
  }
});

app.use((error, _req, res, _next) => res.status(500).json(
  { message: `Algo deu errado! Mensagem: ${error.message}` },
));

app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

app.post('/teams', (req, res) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
  } else {
    res.sendStatus(400);
  }
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    !req.teams.teams.includes(req.body.sigla)
    && teams.every((team) => team.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla' });
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

module.exports = app;