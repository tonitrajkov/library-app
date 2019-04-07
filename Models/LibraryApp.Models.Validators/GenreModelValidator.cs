using FluentValidation;

namespace LibraryApp.Models.Validators
{
    public class GenreModelValidator : AbstractValidator<GenreModel>
    {
        public GenreModelValidator()
        {
            RuleFor(x => x.Title)
               .NotEmpty().WithMessage("Полето е задолжително")
               .Length(0, 250).WithMessage("Дозволени се максимум 250 карактери");
        }
    }
}
