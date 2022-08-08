type VotingOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotingOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotingOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotingOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = []; // tá errado o inglês, eu sei, desculpa ._.

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('###'); // separar votações
      console.log();
    }
  }
}

const votation1 = new Votation('What is your favorite programming language?');
votation1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Javascript', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Typescript', numberOfVotes: 0 });

votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(1);
votation1.vote(1);
votation1.vote(2);

const votation2 = new Votation('What is your favorite color?');
votation2.addVotationOption({ option: 'Red', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Green', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Blue', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Black', numberOfVotes: 0 });

votation2.vote(0);
votation2.vote(1);
votation2.vote(1);
votation2.vote(1);
votation2.vote(1);
votation2.vote(2);
votation2.vote(2);
votation2.vote(3);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);
votationApp.showVotations();
