using FluentValidation;

namespace LibraryApp.Models.Validators
{
    public class AuthorModelValidator : AbstractValidator<AuthorModel>
    {
        public AuthorModelValidator()
        {
            RuleFor(x => x.FirstName)
               .NotEmpty().WithMessage("Полето е задолжително")
               .Length(0, 250).WithMessage("Дозволени се максимум 250 карактери");

            RuleFor(x => x.LastName)
               .NotEmpty().WithMessage("Полето е задолжително")
               .Length(0, 250).WithMessage("Дозволени се максимум 250 карактери");
        }
    }
}
