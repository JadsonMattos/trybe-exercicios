from faker import Faker


faker = Faker(locale='es_AR')

print(faker.last_name())
print(faker.email())
print(faker.password())
print(faker.url())
print(faker.license_plate())


def test_faker_email(faker):
    fake_email = faker.email()
    assert isinstance(fake_email, str)
    assert '@' in fake_email
    assert '.' in fake_email
