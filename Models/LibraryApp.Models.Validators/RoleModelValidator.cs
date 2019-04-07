using FluentValidation;

namespace LibraryApp.Models.Validators
{
    public class RoleModelValidator : AbstractValidator<RoleModel>
    {
        public RoleModelValidator()
        {
            RuleFor(x => x.Title)
               .NotEmpty().WithMessage("Полето е задолжително")
               .Length(0, 250).WithMessage("Дозволени се максимум 250 карактери");

            RuleFor(x => x.Tag)
               .NotEmpty().WithMessage("Полето е задолжително")
               .Length(0, 50).WithMessage("Дозволени се максимум 50 карактери");
        }
    }
}
