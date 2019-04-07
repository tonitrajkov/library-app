using FluentValidation;

namespace LibraryApp.Models.Validators
{
    public class UserModelValidator : AbstractValidator<UserModel>
    {
        public UserModelValidator()
        {
            RuleFor(x => x.FirstName)
               .NotEmpty().WithMessage("Полето е задолжително")
               .Length(0, 250).WithMessage("Дозволени се максимум 250 карактери");

            RuleFor(x => x.LastName)
               .NotEmpty().WithMessage("Полето е задолжително")
               .Length(0, 250).WithMessage("Дозволени се максимум 250 карактери");

            RuleFor(x => x.UserName)
               .NotEmpty().WithMessage("Полето е задолжително")
               .Length(0, 150).WithMessage("Дозволени се максимум 150 карактери");

            RuleFor(x => x.Email)
               .NotEmpty().WithMessage("Полето е задолжително")
               .Length(0, 500).WithMessage("Дозволени се максимум 500 карактери");
        }
    }
}
