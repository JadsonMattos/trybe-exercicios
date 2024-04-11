from flask import Flask, render_template, request, redirect
from models.student_model import StudentModel


app = Flask(__name__)


@app.route('/')


@app.route("/alunos")
def listar_alunos():
    alunos = StudentModel.find()
    dict_alunos = [aluno.to_dict() for aluno in alunos]
    return render_template("alunos.html", alunos=dict_alunos)


@app.route('/alunos/adicionar', methods=['GET', 'POST'])
def adicionar_aluno():
    if request.method == 'POST':
        nome = request.form['nome']
        matricula = request.form['matricula']
        novo_aluno = {'nome': nome, 'matricula': matricula}
        StudentModel(novo_aluno).save()
        return redirect('/')
    return render_template('adicionar_aluno.html')


@app.route('/alunos/editar/<int:index>', methods=['GET', 'POST'])
def editar_aluno(index):
    print(index)
    aluno = StudentModel.find_one({"matricula": str(index)})
    print(f'aluno: {aluno}')
    if not aluno:
        return redirect("/")
    if request.method == "POST":
        nome = request.form["nome"]
        matricula = request.form["matricula"]
        aluno_para_atualizar = {"nome": nome, "matricula": matricula}
        aluno.update(aluno_para_atualizar)
        return redirect("/")
    return render_template(
        "editar_aluno.html",
        aluno=aluno.to_dict(),
        aluno_index=index
    )


@app.route('/alunos/excluir/<int:index>', methods=["GET", "POST"])
def excluir_aluno(index):
    aluno = StudentModel.find_one({"matricula": str(index)})
    if request.method == 'GET':
        return render_template("excluir_aluno.html", aluno=aluno, index=index)

    if not aluno:
        return redirect("/")

    aluno.delete()
    return redirect("/")

if __name__ == '__main__':
    app.run(debug=True)
